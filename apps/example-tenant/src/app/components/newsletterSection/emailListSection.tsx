"use client";

import type { NewsletterPageData } from "@/graphql/queries/getNewsletterPage";
import React, { useState } from "react";
import { SpinnerIcon } from "../../utils/svgs/spinnerIcon";
import { ErrorTag } from "../reuseableUI/errorTag";
import Input from "../reuseableUI/input";
import SecondaryButton from "../reuseableUI/secondaryButton";
import Toast from "../reuseableUI/Toast";

interface EmailListSectionProps {
  newsletterData: NewsletterPageData | null;
}

const EmailListSection: React.FC<EmailListSectionProps> = ({
  newsletterData,
}) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [apiError, setApiError] = useState<string | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [loading, setLoading] = useState(false);

  // Default fallback content
  const title = newsletterData?.title || "JOIN OUR EMAIL LIST";
  const description =
    newsletterData?.description ||
    "Be the first to know about new products, discounts and special events!";

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setApiError(null);
    setShowSuccessToast(false);
    setEmailError("");

    // Validate email
    if (!email || !email.trim()) {
      setEmailError("Email is required.");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      // Prepare email message
      const emailMessage: Record<string, string> = {
        email: email,
      };

      // Prepare email recipients
      const recipients: string[] = [];
      if (newsletterData?.emailTo) {
        recipients.push(
          ...newsletterData.emailTo.split(",").map((e) => e.trim())
        );
      }

      const ccRecipients: string[] = [];
      if (newsletterData?.emailCc) {
        ccRecipients.push(
          ...newsletterData.emailCc.split(",").map((e) => e.trim())
        );
      }

      const bccRecipients: string[] = [];
      if (newsletterData?.emailBcc) {
        bccRecipients.push(
          ...newsletterData.emailBcc.split(",").map((e) => e.trim())
        );
      }

      const tenantName = process.env.NEXT_PUBLIC_API_URL || "";

      const response = await fetch("https://smtp.wsm-dev.com/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tenant_name: tenantName,
          to: recipients,
          cc: ccRecipients ? ccRecipients : undefined,
          bcc: bccRecipients ? bccRecipients : undefined,
          subject: newsletterData?.emailSubject || "Newsletter Signup",
          message: emailMessage,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setShowSuccessToast(true);
      setEmail("");
    } catch (err) {
      console.error("Newsletter signup error:", err);
      setApiError("Failed to subscribe. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Success Toast */}
      {showSuccessToast && (
        <>
          <style jsx global>{`
            @keyframes slideInRight {
              from {
                transform: translateX(100%);
                opacity: 0;
              }
              to {
                transform: translateX(0);
                opacity: 1;
              }
            }
            .animate-slide-in {
              animation: slideInRight 0.3s ease-out;
            }
          `}</style>
          <div className="fixed top-4 right-4 z-50 animate-slide-in">
            <Toast
              message="Successfully Subscribed!"
              subParagraph={
                newsletterData?.successMessage
                  ? newsletterData.successMessage.replace(/<[^>]*>/g, "")
                  : "Thank you for subscribing to our newsletter!"
              }
              type="success"
              duration={5000}
              onClose={() => setShowSuccessToast(false)}
            />
          </div>
        </>
      )}

      <div className="bg-[#222325] w-full h-full flex flex-col lg:flex-row gap-6 items-center justify-center py-10 text-center px-4">
        <div className="space-y-1 max-w-[470px]">
          <p className="text-2xl font-primary font-normal text-white">
            {title}
          </p>
          <span className="text-zinc-300 font-secondary text-base uppercase break-words">{description}</span>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-xl mt-4">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1 w-full">
              <Input
                parentClassName="w-full"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
                className="px-4 py-1.5 w-full"
                disabled={loading}
              />
              <SecondaryButton
                type="submit"
                disabled={loading}
                content={
                  loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin [&>svg]:size-5">
                        {SpinnerIcon}
                      </span>
                    </span>
                  ) : (
                    "SUBMIT"
                  )
                }
                className="text-sm font-primary h-full border-none font-normal min-w-24"
              />
            </div>

            {emailError && (
              <div className="text-white text-sm w-full text-left px-1">
                {emailError}
              </div>
            )}

            {apiError && (
              <div className="w-full">
                <ErrorTag message={apiError} />
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default EmailListSection;

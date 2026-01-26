import { fetchNewsletterPage } from "@/graphql/queries/getNewsletterPage";
import EmailListSection from "./emailListSection";

export default async function EmailSectionServer() {
  const newsletterData = await fetchNewsletterPage();

  return <EmailListSection newsletterData={newsletterData} />;
}

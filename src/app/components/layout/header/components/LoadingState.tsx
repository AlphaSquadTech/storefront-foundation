interface LoadingStateProps {
  className?: string;
}

export const LoadingState = ({ className = "" }: LoadingStateProps) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="flex items-center gap-4">
        <div className="h-4 bg-gray-300 rounded w-16"></div>
        <div className="h-4 bg-gray-300 rounded w-20"></div>
        <div className="h-4 bg-gray-300 rounded w-14"></div>
        <div className="h-4 bg-gray-300 rounded w-18"></div>
      </div>
    </div>
  );
};
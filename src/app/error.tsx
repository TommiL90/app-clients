'use client'
import { ButtonSecondary } from '@/components/Buttons';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center h-screen">
      <h2 className="font-bold text-xl mb-4">{error.message}</h2>
      <ButtonSecondary onClick={reset}>Tente de novo!</ButtonSecondary>
    </div>
  );
}

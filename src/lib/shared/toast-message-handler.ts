import { isFetchBaseQueryError } from '@/types';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { toast } from 'sonner';
import { defaultErrorHandler } from './handle-message-error';

export function toastMessageHandler(error: FetchBaseQueryError | SerializedError) {
  const status = isFetchBaseQueryError(error) && error.status;
  const errorMessage = defaultErrorHandler(status);
  const firstDotIndex = errorMessage.indexOf('.');

  if (firstDotIndex !== -1) {
    toast.error(errorMessage.slice(0, firstDotIndex), {
      description: errorMessage.slice(firstDotIndex + 1),
    });
  } else {
    toast.error(errorMessage);
  }
}

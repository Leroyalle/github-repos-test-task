interface ErrorMessages {
  [key: number]: string;
}

type RtkErrorStatus = 'TIMEOUT_ERROR' | 'FETCH_ERROR' | 'PARSING_ERROR' | 'CUSTOM_ERROR';
type Status = number | RtkErrorStatus | false;

const RTK_ERROR_MAP: Record<RtkErrorStatus, number> = {
  FETCH_ERROR: 503,
  PARSING_ERROR: 400,
  TIMEOUT_ERROR: 504,
  CUSTOM_ERROR: 500,
};

export const createErrorHandler =
  (customMessages: ErrorMessages = {}) =>
  (inputStatus: Status): string => {
    const defaultMessages: ErrorMessages = {
      400: 'Неверный запрос. Пожалуйста, проверьте введенные данные',
      401: 'Требуется авторизация. Проверьте access токен',
      403: 'Доступ запрещен. Возможно, у вас недостаточно прав для этого ресурса',
      404: 'Репозитории не найдены. Проверьте имя пользователя',
      500: 'Ошибка сервера. Попробуйте позже',
      503: 'Сервис недоступен. Попробуйте позже',
      504: 'Таймаут соединения. Попробуйте позже',
    };

    if (inputStatus === false || typeof inputStatus === 'undefined') {
      return 'Некорректный статус ошибки';
    }

    const status =
      typeof inputStatus === 'string' ? RTK_ERROR_MAP[inputStatus] || 500 : inputStatus;

    const mergedMessages = {
      ...defaultMessages,
      ...customMessages,
    };

    return mergedMessages[status] || 'Произошла неизвестная ошибка';
  };

export const defaultErrorHandler = createErrorHandler();

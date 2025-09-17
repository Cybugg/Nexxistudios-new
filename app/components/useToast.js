"use client";

import { useCallback, useState } from "react";
import Toast from "./toast";

export function useToasts() {
  const [toast, setToast] = useState(null);

  const show = useCallback((type, message) => {
    setToast({ type, message });
  }, []);

  const hide = useCallback(() => setToast(null), []);

  const ToastElement = toast ? (
    <div className="bottom top-6 right-6 z-50">
      <Toast type={toast.type} message={toast.message} onClose={hide} duration={4000} />
    </div>
  ) : null;

  return { show, hide, ToastElement };
}

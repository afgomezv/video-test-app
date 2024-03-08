import { useState } from "react";

export const useShow = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShowTwo, setIsShowTwo] = useState(false);

  const onToggleShow = () => setIsShow(!isShow);
  const onToggleShowTwo = () => setIsShowTwo(!isShowTwo);

  return {
    isShow,
    isShowTwo,
    onToggleShow,
    onToggleShowTwo,
  };
};

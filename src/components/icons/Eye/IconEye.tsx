import { memo } from "react";

import { IconStyleProps } from "@/components/icons/types";

function IconEye({ size = 16, color = "gray" }: IconStyleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M2.41973 12.7132C2.28354 12.4975 2.21545 12.3897 2.17733 12.2234C2.1487 12.0985 2.1487 11.9015 2.17733 11.7766C2.21545 11.6103 2.28354 11.5025 2.41973 11.2868C3.54513 9.50484 6.895 5 12 5C17.105 5 20.4549 9.50484 21.5803 11.2868C21.7165 11.5025 21.7846 11.6103 21.8227 11.7766C21.8513 11.9015 21.8513 12.0985 21.8227 12.2234C21.7846 12.3897 21.7165 12.4975 21.5803 12.7132C20.4549 14.4952 17.105 19 12 19C6.895 19 3.54513 14.4952 2.41973 12.7132Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default memo(IconEye);

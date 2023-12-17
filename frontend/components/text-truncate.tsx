"use client";
import React, { useState } from "react";

interface TextTruncationProps {
  originalText: string;
  maxLength?: number;
}
const TextTruncation = ({ originalText, maxLength = 10 }: TextTruncationProps) => {
  // Memotong teks jika lebih dari 10 huruf
  const truncatedText = originalText.length > maxLength ? `${originalText.slice(0, maxLength)}...` : originalText;

  return <p className="text-sm text-muted-foreground font font-normal">{truncatedText}</p>;
};

export default TextTruncation;

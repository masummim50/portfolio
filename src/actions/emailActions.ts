"use server";

import emailjs from "@emailjs/browser";
import { RefObject } from "react";

export const sendEmailAction = async (data: { [key: string]: any }) => {
  const templateParams = {
    user_name: data.user_name,
    user_email: data.user_email,
    message: data.message,
  };
  
};

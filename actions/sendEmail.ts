"use server";

import { Resend } from "resend";
import { validatateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

//server side validation
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!validatateString(sendEmail, 500)) {
    return {
        error: "Invalid sender email",
    };
  };

  if (!validatateString(message, 5000)) {
    return {
        error: "Invalid message",
    };
  };

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "p.annmulling@gmail.com",
    subject: "message from contact form",
    reply_to: senderEmail as string,
    text: message as string,
  });
};

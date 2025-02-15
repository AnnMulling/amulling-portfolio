"use server";

import { Resend } from "resend";
import { validatateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

//server side validation
// export const sendEmail = async (formData: FormData) => {
//   const senderEmail = formData.get("senderEmail");
//   const message = formData.get("message");

//   if (!validatateString(sendEmail, 500)) {
//     return {
//       error: "Invalid sender email",
//     };
//   }

//   if (!validatateString(message, 5000)) {
//     return {
//       error: "Invalid message",
//     };
//   }

//   let data;

//   try {
//     data = await resend.emails.send({
//       from: "onboarding@resend.dev",
//       to: "p.annmulling@gmail.com",
//       subject: "message from contact form",
//       reply_to: senderEmail as string,
//       react: React.createElement(ContactFormEmail, {
//         message: message as string,
//         senderEmail: senderEmail as string,
//       })

//     });
//   } catch (error: any) {
//     return {
//       error: getErrorMessage(error),
//     };
//   }

//   return {
//     data,
//   }
// };

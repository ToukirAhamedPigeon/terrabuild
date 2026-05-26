import emailjs from "emailjs-com";

// Initialize EmailJS with your user ID
export const initEmailJS = () => {
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  if (userId) {
    emailjs.init(userId);
  }
};

// Send contact form email
export const sendContactEmail = async (data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  if (!serviceId || !templateId) {
    console.error("EmailJS configuration missing");
    throw new Error("Email service not configured");
  }

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || "Not provided",
        message: data.message,
        to_name: "Terrabuild Team",
        reply_to: data.email,
      },
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    );
    return { success: true, response };
  } catch (error) {
    console.error("Email send error:", error);
    throw error;
  }
};

// Send newsletter subscription email
export const sendSubscriptionEmail = async (email: string) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  if (!serviceId || !templateId) {
    console.error("EmailJS configuration missing");
    throw new Error("Email service not configured");
  }

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_email: email,
        subject: "Newsletter Subscription",
        message: "New subscriber joined the newsletter",
        to_name: "Terrabuild Team",
      },
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    );
    return { success: true, response };
  } catch (error) {
    console.error("Subscription email error:", error);
    throw error;
  }
};

// Send property inquiry email
export const sendPropertyInquiry = async (data: {
  name: string;
  email: string;
  phone: string;
  propertyTitle: string;
  propertyId: number;
  message?: string;
}) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  if (!serviceId || !templateId) {
    console.error("EmailJS configuration missing");
    throw new Error("Email service not configured");
  }

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        property_title: data.propertyTitle,
        property_id: data.propertyId,
        message: data.message || "Interested in this property",
        to_name: "Terrabuild Sales Team",
        reply_to: data.email,
      },
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    );
    return { success: true, response };
  } catch (error) {
    console.error("Property inquiry error:", error);
    throw error;
  }
};
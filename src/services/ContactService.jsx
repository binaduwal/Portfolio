import axios from 'axios';

const WEB3FORMS_API_URL = 'https://api.web3forms.com/submit';
// const API_KEY = 'ec8a9af9-f2c8-4f52-908e-9c1057c01bce'; 

export const sendContactForm = async (formData) => {
  try {
    const response = await axios.post(WEB3FORMS_API_URL, {
      access_key: import.meta.env.API_KEY,
      ...formData,
    });

    if (response.data.success) {
      return { success: true, message: 'Message sent successfully!' };
    } else {
      return { success: false, message: 'Something went wrong. Try again.' };
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, message: 'Error sending message. Please try later.' };
  }
};
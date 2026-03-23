import axios from 'axios';

const WEB3FORMS_API_URL = 'https://api.web3forms.com/submit';

export const sendContactForm = async (formData) => {
  try {
    const API_KEY = import.meta.env.VITE_API_KEY;
    if (!API_KEY) throw new Error('VITE_API_KEY is not set in env');
    const response = await axios.post(WEB3FORMS_API_URL, {
      access_key: API_KEY,
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
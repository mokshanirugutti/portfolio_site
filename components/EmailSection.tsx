'use client'
import React from "react";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { faCode } from "@fortawesome/free-solid-svg-icons";
import DrawOutlineButton from './ProjectCards/DrawOutlineButton'

const EmailSection: React.FC = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });
      if (response.ok) {
        alert('Message sent!');
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section className="grid gird-cols-1 md:grid-cols-2 bg-gray-800 h-screen place-items-center p-5">
      <div className="text-[#ADB7BE] max-w-md">
        <p className="mb-4">
          I'm currently looking for new opportunities, my inbox is always open.
          To know more about me and my work or if you want to collable, drop your message. I'll 
          get back to you!
        </p>
        
        {/* GitHub Icon and Link */}
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faGithub} size="2x" className="mr-2" />
          <a href="https://github.com/mokshanirugutti" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <DrawOutlineButton>Github</DrawOutlineButton>
          </a>
        </div>
        
        {/* LinkedIn Icon and Link */}
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="mr-2" />
          <a href="https://www.linkedin.com/in/moksha-nirugutti" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <DrawOutlineButton>LinkedIn</DrawOutlineButton>
          </a>
        </div>

        {/* LeetCode Icon and Link */}
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faCode} size="2x" className="mr-2" />
          <a href="https://leetcode.com/u/mokshanirugutti/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <DrawOutlineButton>Leetcode</DrawOutlineButton>
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div>
      <motion.form className="max-w-md" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">Email:</label>
          <input type="email" id="email" placeholder="youremail" name="email" className="bg-gray-700 rounded-md px-3 py-2 w-full text-white" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white mb-2">Message:</label>
          <textarea id="message" name="message" rows={4} placeholder="Keep you message here.." className="bg-gray-700 rounded-md px-3 py-2 w-full text-white" required></textarea>
        </div>
        <motion.button type="submit" 
        className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          <svg className="w-3.5 h-3.5 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
        </svg>
          Send Message
        </motion.button>
      </motion.form>
      </div>
    </section>
  );
};

export default EmailSection;

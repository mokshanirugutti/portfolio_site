'use client'
import React, { useState } from "react";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { faCode } from "@fortawesome/free-solid-svg-icons";

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
    <section className="grid grid-cols-2 bg-gray-800 h-screen place-items-center">
      <div className="text-[#ADB7BE] max-w-md">
        <p className="mb-4">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        
        {/* GitHub Icon and Link */}
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faGithub} size="2x" className="mr-2" />
          <a href="https://github.com/mokshanirugutti" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            GitHub
          </a>
        </div>
        
        {/* LinkedIn Icon and Link */}
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="mr-2" />
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            LinkedIn
          </a>
        </div>

        {/* LeetCode Icon and Link */}
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faCode} size="2x" className="mr-2" />
          <a href="https://leetcode.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            LeetCode
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
        <motion.button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Send Message
        </motion.button>
      </motion.form>
      </div>
    </section>
  );
};

export default EmailSection;

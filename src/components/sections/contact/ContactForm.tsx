import { Input, Textarea, Button } from "@chakra-ui/react";
import './ContactForm.css';

export default function ContactForm() {
  return (
    <form className="form-container">
      <div className="form-group">
        <label htmlFor="name" className="form-label">Name</label>
        <Input type="text" id="name" name="name" placeholder="Enter your name" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="company" className="form-label">Company</label>
        <Input type="text" id="company" name="company" placeholder="Enter your company" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <Input type="email" id="email" name="email" placeholder="Enter your email" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="phone" className="form-label optional-label">
          Phone <span className="optional-text">*Optional</span>
        </label>
        <Input type="tel" id="phone" name="phone" placeholder="Enter your phone number" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">Message</label>
        <Textarea id="message" name="message" rows={5} placeholder="Enter your message" className="form-textarea" />
      </div>
      <Button type="submit" className="form-button">
        <span className="form-button-text">Send Message</span>
      </Button>
    </form>
  );
}

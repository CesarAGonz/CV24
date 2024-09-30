import { Input, Textarea, Button } from "@chakra-ui/react";

export default function ContactForm() {
  return (
    <form style={{ backgroundColor: "#2d2d2d", borderRadius: "1rem", padding: "2rem", maxWidth: "30rem", margin: "0 auto" }}>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="name" style={{ display: "block", fontSize: "1.125rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Name</label>
        <Input type="text" id="name" name="name" placeholder="Enter your name" style={{ backgroundColor: "#1a1a1a", borderColor: "#3d3d3d", color: "white", borderRadius: "0.5rem", padding: "0.5rem 1rem", width: "100%", outline: "none" }} _focus={{ ring: 2, ringColor: "#00b8d4" }} />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="email" style={{ display: "block", fontSize: "1.125rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Email</label>
        <Input type="email" id="email" name="email" placeholder="Enter your email" style={{ backgroundColor: "#1a1a1a", borderColor: "#3d3d3d", color: "white", borderRadius: "0.5rem", padding: "0.5rem 1rem", width: "100%", outline: "none" }} _focus={{ ring: 2, ringColor: "#00b8d4" }} />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="message" style={{ display: "block", fontSize: "1.125rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Message</label>
        <Textarea id="message" name="message" rows={5} placeholder="Enter your message" style={{ backgroundColor: "#1a1a1a", borderColor: "#3d3d3d", color: "white", borderRadius: "0.5rem", padding: "0.5rem 1rem", width: "100%", outline: "none" }} _focus={{ ring: 2, ringColor: "#00b8d4" }} />
      </div>
      <Button type="submit" style={{ backgroundColor: "#ff9100", color: "#1a1a1a", fontWeight: "bold", padding: "0.5rem 1rem", borderRadius: "0.5rem", width: "100%" }} _hover={{ backgroundColor: "#e68200" }} onClick={() => alert("Message sent!")}>
        Send Message
      </Button>
    </form>
  );
}

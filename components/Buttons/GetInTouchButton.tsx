import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IconSend } from "@tabler/icons-react"
import { SendEmailButton } from "./SendEmailButton"

export function GetInTouchButton() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSendEmail = async () => {
    setStatus("sending")
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      })
      if (response.ok) {
        setStatus("sent")
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error(error)
      setStatus("failed")
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline"><IconSend/></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Let&rsquo;s Connect!</DialogTitle>
          <DialogDescription>
            Got something on your mind? Drop me a message, and I&rsquo;ll get back to you in no time!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">Email</Label>
            <Input id="email" placeholder="yourmail@gmail.com" type="email" className="col-span-3" 
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-right">Message</Label>
            <Input id="message" placeholder="your message" className="col-span-3" 
              onChange={(e) => setMessage(e.target.value)} />
          </div>
        </div>
        <DialogFooter>
          <SendEmailButton status={status} onClick={handleSendEmail} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

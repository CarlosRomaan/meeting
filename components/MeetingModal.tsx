import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Button } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  title: string;
  handleClick?: () => void;
  buttonText?: string;
  buttonIcon?: string;
  image?: string;
  children?: React.ReactNode;
}

const MeetingModal = ({
  isOpen, onClose, className, title, handleClick, buttonText, buttonIcon, image, children
}: MeetingModalProps) => {
  return (
    <Dialog 
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
        <VisuallyHidden.Root>
          <DialogTitle>
            Meeting Modal
          </DialogTitle>
        </VisuallyHidden.Root>

        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image
                src={image}
                alt="image"
                height={72}
                width={72}
              />
            </div>
          )}
          <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>{title}</h1>
          {children}
          <Button 
            className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="button icon"
                height={13}
                width={13}
              /> 
            )} &nbsp;
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>        
      </DialogContent>
    </Dialog>

  )
}

export default MeetingModal;
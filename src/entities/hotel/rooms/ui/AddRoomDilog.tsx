import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRoomForm } from "../forms";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export function AddRoomDialog({ isModalOpen, setIsModalOpen }: Props) {
  const handleClose = () => {
    setIsModalOpen(false);
  };
  const { roomForm, control } = useRoomForm();

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Room</DialogTitle>
          <DialogDescription>Enter the rooms</DialogDescription>
        </DialogHeader>
        <div>
          <Form {...roomForm}>
            <form className="w-full max-w-3xl space-y-5">
              <div>
                <FormField
                  control={control}
                  name="roomType"
                  render={({ field, fieldState: { error } }) => (
                    <FormItem>
                      <FormLabel>Room Type</FormLabel>
                      <FormControl>
                        <Input placeholder="Room Type" {...field} />
                      </FormControl>
                      <FormDescription>Room Type is Required</FormDescription>
                      <FormMessage>{error?.message}</FormMessage>{" "}
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-row space-x-14">
                <div>
                  <FormField
                    control={control}
                    name="size"
                    render={({ field, fieldState: { error } }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Room Size" {...field} />
                        </FormControl>
                        <FormDescription>Room Type is Required</FormDescription>
                        <FormMessage>{error?.message}</FormMessage>{" "}
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={control}
                    name="quantity"
                    render={({ field, fieldState: { error } }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Room Quantity" {...field} />
                        </FormControl>
                        <FormDescription>Room Type is Required</FormDescription>
                        <FormMessage>{error?.message}</FormMessage>{" "}
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

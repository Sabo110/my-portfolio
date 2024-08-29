import { toast } from 'sonner'

export const successNotification = (message: string) => {
    toast.success(message, {
        position: 'top-center',
    });
}

export const errorNotification = (message: string) => {
    toast.error(message, {
        position: 'top-center',
    });
}
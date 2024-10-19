

  # Reflex Toast Component

The Reflex Toast Component is a wrapper around the Sonner toast library, providing an easy way to display toast notifications in your Reflex application.

## Usage

### Usage in State

To use the Toast component in your Reflex application, you need to first add the Toaster provider to your app, and then you can use the toast methods in your state classes.

```python
import reflex as rx

class State(rx.State):
    def show_toast(self):
        return rx.toast.info("This is an info toast!")

def index():
    return rx.box(
        rx.button("Show Toast", on_click=State.show_toast),
        rx.toast.provider(),
    )

app = rx.App()
app.add_page(index)
```

### Props

The Toaster component accepts various props to customize its behavior:

```python
rx.toast.provider(
    theme=rx.color_mode,  # Theme of the toast
    rich_colors=True,  # Whether to show rich colors
    expand=True,  # Whether to expand the toast
    position="bottom-right",  # Position of the toast
    close_button=False,  # Whether to show the close button
    pause_when_page_is_hidden=True,  # Pause toast timers when page is hidden
)
```

### Customization

You can customize individual toasts using the various toast methods:

```python
class State(rx.State):
    def show_custom_toast(self):
        return rx.toast(
            "Custom Toast",
            description="This is a custom toast",
            action=rx.toast.options.ToastAction(label="Undo", on_click=self.undo),
            cancel=rx.toast.options.ToastAction(label="Cancel", on_click=self.cancel),
            duration=5000,
            important=True,
        )

    def show_success_toast(self):
        return rx.toast.success("Operation successful!")

    def show_error_toast(self):
        return rx.toast.error("An error occurred.")

    def undo(self):
        return rx.toast.info("Undo action performed")

    def cancel(self):
        return rx.toast.info("Action cancelled")
```

You can also dismiss toasts programmatically:

```python
class State(rx.State):
    def dismiss_all_toasts(self):
        return rx.toast.dismiss()

    def dismiss_specific_toast(self):
        return rx.toast.dismiss("toast-id")
```

  
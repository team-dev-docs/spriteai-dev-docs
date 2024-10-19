

  # Sonner Toast Component

## Usage

The Sonner Toast component is a customizable notification system for displaying messages to users. It provides various types of toasts such as info, warning, error, and success.

### Usage in State

To use the toast component in your Reflex app, you need to:

1. Add the toast provider to your app
2. Call toast methods from your state

```python
import reflex as rx

class State(rx.State):
    def show_toast(self):
        return rx.toast.success("Operation completed successfully!")

def index():
    return rx.vstack(
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
    theme=rx.color_mode,  # The theme of the toast
    rich_colors=True,  # Whether to show rich colors
    expand=True,  # Whether to expand the toast
    position="bottom-right",  # The position of the toast
    close_button=False,  # Whether to show the close button
    pause_when_page_is_hidden=True,  # Pause toast timers when the page is hidden
)
```

### Customization

You can customize individual toasts using the `ToastProps`:

```python
rx.toast.success(
    "Custom Toast",
    title="Success",
    description="Operation completed successfully!",
    duration=5000,  # Duration in milliseconds
    action=rx.toast.options.ToastAction(
        label="Undo",
        on_click=State.undo_action
    ),
    style={"background": "green", "color": "white"},
)
```

Available toast methods:
- `rx.toast.info()`
- `rx.toast.warning()`
- `rx.toast.error()`
- `rx.toast.success()`

You can also dismiss toasts programmatically:

```python
rx.toast.dismiss()  # Dismiss all toasts
rx.toast.dismiss("toast_id")  # Dismiss a specific toast
```

  
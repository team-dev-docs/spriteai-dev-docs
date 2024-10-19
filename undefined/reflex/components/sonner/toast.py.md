

  # Reflex Toast Component

## Usage

The Toast component in Reflex provides a way to display temporary notifications to users. It's built on top of the Sonner library and offers various customization options.

### Usage in State

To use the Toast component in your Reflex app, you first need to import it and then use it in your state methods. Here are some examples:

```python
import reflex as rx

class State(rx.State):
    def show_info_toast(self):
        return rx.toast.info("This is an info message")

    def show_success_toast(self):
        return rx.toast.success("Operation successful!")

    def show_error_toast(self):
        return rx.toast.error("An error occurred")

    def show_warning_toast(self):
        return rx.toast.warning("This is a warning")

    def show_custom_toast(self):
        return rx.toast("Custom message", duration=5000, position="top-center")
```

### Props

The Toast component accepts various props for customization. Here are some examples:

```python
rx.toast.provider(
    theme="light",
    rich_colors=True,
    expand=False,
    position="bottom-right",
    close_button=True,
    offset="10px",
    duration=4000,
)

rx.toast("Hello, World!", 
    title="Greeting",
    description="This is a longer description",
    action=rx.toast.options.ToastAction(label="Undo", on_click=State.undo),
    duration=5000,
)
```

### Customization

You can customize the appearance and behavior of toasts:

```python
# Custom styling
rx.toast("Styled toast", 
    style={"background": "purple", "color": "white"},
)

# Custom position
rx.toast("Top left toast", position="top-left")

# Custom duration
rx.toast("Long-lasting toast", duration=10000)  # 10 seconds

# With a close button
rx.toast("Dismissible toast", close_button=True)

# Invert colors
rx.toast("Inverted toast", invert=True)

# Custom action
rx.toast("Action toast", 
    action=rx.toast.options.ToastAction(label="Click me", on_click=State.handle_click)
)
```

Remember to include the Toast provider in your app's layout:

```python
def index():
    return rx.box(
        rx.toast.provider(),
        # ... other components
    )
```

This ensures that the Toast component is available throughout your app.

  
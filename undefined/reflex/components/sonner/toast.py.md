

  # Sonner Toast Component

## Usage

The Sonner Toast component provides a customizable toast notification system for Reflex applications.

### Usage in State

To use the Toast component in your Reflex app:

1. Import the toast namespace:

```python
import reflex as rx
```

2. Add the Toaster provider to your app:

```python
def index():
    return rx.vstack(
        rx.button("Show Toast", on_click=show_toast),
        rx.toast.provider(),
    )
```

3. Create a function to show a toast:

```python
def show_toast():
    return rx.toast("Hello, World!")
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
    offset="10px",  # Offset of the toast
    duration=5000,  # Duration in milliseconds
)
```

### Customization

You can customize individual toasts using different methods:

```python
# Info toast
rx.toast.info("This is an info message")

# Warning toast
rx.toast.warning("This is a warning message")

# Error toast
rx.toast.error("This is an error message")

# Success toast
rx.toast.success("This is a success message")

# Custom toast with additional props
rx.toast(
    "Custom Toast",
    description="This is a custom toast message",
    action=rx.toast.options.ToastAction(label="Undo", on_click=undo_action),
    duration=3000,
)

# Dismiss a toast
rx.toast.dismiss()
```

You can also create a ToastProps object to reuse toast configurations:

```python
custom_toast = rx.toast.options(
    title="Custom Toast",
    description="This is a reusable toast configuration",
    duration=4000,
    position="top-center",
)

# Use the custom toast configuration
rx.toast(**custom_toast.dict())
```

  
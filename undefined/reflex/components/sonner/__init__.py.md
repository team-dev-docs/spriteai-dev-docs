

  # Sonner Toast Component

## Usage

The Sonner Toast component is a part of the Reflex UI library, providing a sleek and customizable toast notification system for your Python applications.

### Usage in State

To use the Sonner Toast component in your Reflex application, you can import it and call the `toast` function. Here's a basic example:

```python
from reflex.components.sonner import toast

class State(rx.State):
    def show_toast(self):
        toast("Hello, World!")
```

### Props

The `toast` function accepts various props to customize the appearance and behavior of the toast notification. Here are some examples:

```python
# Basic usage
toast("Simple notification")

# With a title
toast("Notification with title", title="Important")

# Specifying duration
toast("This will disappear in 5 seconds", duration=5000)

# Using different types
toast("Success message", type="success")
toast("Error message", type="error")
toast("Warning message", type="warning")

# With custom styling
toast("Custom styled toast", style={"background": "purple", "color": "white"})
```

### Customization

You can further customize the Sonner Toast component by adjusting its global settings or creating custom toast layouts:

```python
from reflex.components.sonner import Toaster

def index():
    return rx.vstack(
        rx.button("Show Toast", on_click=State.show_toast),
        # Customize global toast settings
        Toaster(
            position="top-center",
            expand=False,
            closeButton=True,
            richColors=True,
        )
    )
```

For more advanced customization, you can create custom toast layouts using Reflex components and pass them to the `toast` function.

  
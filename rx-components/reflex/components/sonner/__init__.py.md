

  # Sonner Toast Component

## Usage

The Sonner Toast component is a part of the Reflex UI library, providing an easy way to display toast notifications in your application.

### Usage in State

To use the Sonner Toast component in your Reflex application, you can import it and call the `toast` function. Here's an example:

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
toast("Your message here")

# With a title
toast("Message", title="Notification Title")

# With a custom duration (in milliseconds)
toast("Quick message", duration=2000)

# With a custom type
toast("Success!", type="success")
toast("Warning!", type="warning")
toast("Error occurred", type="error")

# With a custom position
toast("Top right message", position="top-right")
toast("Bottom left message", position="bottom-left")

# With a custom action
toast("Message with action", action={
    "label": "Undo",
    "onClick": lambda: print("Undo clicked")
})
```

### Customization

You can further customize the Sonner Toast component by adjusting its global settings. For example:

```python
from reflex.components.sonner import Toaster

def index():
    return rx.vstack(
        rx.button("Show Toast", on_click=State.show_toast),
        Toaster(
            theme="dark",
            position="top-center",
            expand=True,
            richColors=True,
        )
    )
```

This example sets up a dark theme for all toasts, positions them at the top-center of the screen, allows them to expand, and uses rich colors for different toast types.

  
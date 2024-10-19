

  # Sonner Toast Component

## Usage

The Sonner Toast component is part of the Reflex UI library and provides a way to display toast notifications in your application.

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
toast("This is a basic toast")

# With a title
toast("This is the description", title="Toast Title")

# With a custom duration (in milliseconds)
toast("This toast will last for 5 seconds", duration=5000)

# With a custom style
toast("Styled toast", style={"background": "red", "color": "white"})

# With a custom action
toast("Toast with action", action={
    "label": "Undo",
    "onClick": lambda: print("Undo clicked")
})
```

### Customization

You can further customize the Sonner Toast component by configuring global options. For example:

```python
from reflex.components.sonner import Toaster

def index():
    return rx.vstack(
        rx.button("Show Toast", on_click=State.show_toast),
        Toaster(
            position="top-center",
            expand=False,
            richColors=True,
            closeButton=True
        )
    )
```

This example sets up a Toaster component with custom global options for all toasts in the application.

  
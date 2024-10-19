

  # Sonner Toast Component

## Usage

The Sonner Toast component is a part of the Reflex UI library, providing a way to display toast notifications in your application.

### Usage in State

To use the Sonner Toast component in your Reflex application, you can import it as follows:

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

# Toast with a title
toast("This is the description", title="Toast Title")

# Toast with custom duration (in milliseconds)
toast("This toast will last for 5 seconds", duration=5000)

# Toast with custom type
toast("Success!", type="success")
toast("Warning!", type="warning")
toast("Error occurred", type="error")

# Toast with custom position
toast("Top right toast", position="top-right")
toast("Bottom left toast", position="bottom-left")

# Toast with custom action
toast("Action toast", action={
    "label": "Undo",
    "onClick": lambda: print("Undo clicked")
})
```

### Customization

You can customize the appearance of toasts globally by wrapping your app with the Sonner provider:

```python
import reflex as rx
from reflex.components.sonner import Toaster

def index():
    return rx.vstack(
        rx.button("Show Toast", on_click=State.show_toast),
        Toaster(
            theme="light",
            expand=True,
            position="top-center",
            closeButton=True
        )
    )

app = rx.App()
app.add_page(index)
```

This setup allows you to set default properties for all toasts in your application, such as theme, position, and whether to show a close button.

  
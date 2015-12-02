Jade support for NativeScript projects.
=======================================

How to use
----------
```
$ tns install jade
```

The above command installs this module and installs the necessary hooks. Jade processing of all `.jade` files inside `app` folder happens when the project is prepared for build.

Example:
```Jade
Page(xmlns="http://schemas.nativescript.org/tns.xsd")
  StackLayout
    Label(text="This is Label")
    Button(text="This is Button")
```

Result:
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <StackLayout>
    <Label text="This is Label"></Label>
    <Button text="This is Button"></Button>
  </StackLayout>
</Page>
```

More info at http://jade-lang.com/.
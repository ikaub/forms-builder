Forms Builder

Tech Stack: Angular, Angular Material CDK, NgRX, RxJS, Json-server as a backend

Requirements: create forms builder which separated on 3 sections:
 1. Accordion with 1.1 Form General Styling/ 1.2 Field styling
 2. Form Builder itself (Drop section)
 3. Available draggable fields (Drag section): Input, Textarea, Button, Checkbox with label, Select option 

Use ‘CDK Portal’ for 3 screen sections
You can drag and drop elements from section 3 into section 2.
On field select at section 2, section 1 will change to field related styles:
Placeholder text
Width
Height
Required
Border Style
Font Size Input
Font Weight Select
Color Input RGB

Create Pure Function
Create Pure Pipe
Use Angular Material
Use RxJS
Use RxJS operators map, filter, tap, switchMap
Use pipe takeUntil for unsubscribing to prevent memory leaks 
Use ngrxLet, ngrxPush instead of pipe async 
Create shared components with ‘ControlValueAccessor’ interface 
Create abstract classes for reusable functionality 
Use ‘Interfaces’, ‘Enums’
Use router ‘Guard’ to check for permission
Use ‘Interceptor’ to modify http request, add ‘Content-Type: application/json’
Use Drag&Drop CDK with styled placeholder on Drop
Use ChangeDetectionStrategy.OnPush
Use ‘NgRX Store, Actions, Effects’
Use reusable style variables
Use reusable style classes

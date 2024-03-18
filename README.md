# AracomPersons

## Aufgaben

### Aufgabe 1
Laden sie die Personen über die bereitgestellt API: https://aracom.de/api/persons.php

Eine Typescript Klasse Person wird vorgegeben.

```typescript
export class Person {
  firstName: string;
  lastName: string;
  birthday: date;
}
```

Stellen sie die Personen in einer Tabelle dar und formatieren Sie die Spalten entsprechend.

### Aufgabe 2
Sortieren Sie die Daten nach dem Vornamen in alphabetischer Reihenfolge.
Dies soll folgendes erfüllen:
- Ausgabe in folgendem Format: 1. Emma, 2. Ben, 3. Paul
- Effizienz auch bei vielen Vornamen
- Umgang mit Null Werten
 
### Aufgabe 3
Erstellen Sie eine Möglichkeit eine neue Person der bestehenden Liste hinzufügen. Dies soll über eine Benutzereingabe möglich sein.  
Halten Sie sich hier an die entsprechenden Richtlinien Ihres Frameworks.  
Vor- und Nachname sollen Pflichtfelder sein. Das Geburtstdatum soll der Nutzer über einen Datepicker auswählen können. Stellen sie sicher, dass dieses in der Vergangenheit liegt.

Neue Einträge sollen sortiert in die Tabelle aufgenommen und angezeigt werden.
Das Formular zum Hinzufügen soll auf einer anderen Seite als die Tabelle sein.

### Aufgabe 4
Gestalten Sie Ihre Lösung mittels CSS ansprechend. Gerne kann dafür ein Framework wie [Bootstrap](https://getbootstrap.com/) oder [Tailwind](https://tailwindcss.com/) eingesetzt werden.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

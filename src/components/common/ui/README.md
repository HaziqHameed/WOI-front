# UI Components

This directory contains reusable UI components that follow global standards and can be used across the application.

## Components

### DateInput
A date input component with calendar icon and custom styling.

```tsx
import { DateInput } from '@/components/common/ui';

<DateInput
  value={dateValue}
  onChange={setDateValue}
  label="Start Date"
  placeholder="dd-mm-yyyy"
  disabled={false}
  required={true}
/>
```

**Props:**
- `value`: string - Current date value
- `onChange`: (value: string) => void - Change handler
- `placeholder?`: string - Placeholder text
- `className?`: string - Additional CSS classes
- `disabled?`: boolean - Whether input is disabled
- `label?`: string - Label text
- `required?`: boolean - Whether field is required

### Dropdown
A customizable dropdown component with search functionality.

```tsx
import { Dropdown, DropdownOption } from '@/components/common/ui';

const options: DropdownOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' }
];

<Dropdown
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  label="Select Option"
  searchable={true}
/>
```

**Props:**
- `options`: DropdownOption[] - Array of options
- `value`: string - Selected value
- `onChange`: (value: string) => void - Change handler
- `placeholder?`: string - Placeholder text
- `className?`: string - Additional CSS classes
- `disabled?`: boolean - Whether dropdown is disabled
- `label?`: string - Label text
- `required?`: boolean - Whether field is required
- `searchable?`: boolean - Enable search functionality

### SearchInput
A search input component with search icon.

```tsx
import { SearchInput } from '@/components/common/ui';

<SearchInput
  value={searchValue}
  onChange={setSearchValue}
  label="Search Messages"
  placeholder="Search in log messages..."
  onSearch={() => console.log('Search triggered')}
/>
```

**Props:**
- `value`: string - Current search value
- `onChange`: (value: string) => void - Change handler
- `placeholder?`: string - Placeholder text
- `className?`: string - Additional CSS classes
- `disabled?`: boolean - Whether input is disabled
- `label?`: string - Label text
- `required?`: boolean - Whether field is required
- `icon?`: React.ReactNode - Custom icon
- `onSearch?`: () => void - Search handler (triggered on Enter)

### Button
A versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@/components/common/ui';

<Button
  onClick={() => console.log('Clicked')}
  variant="primary"
  size="md"
  disabled={false}
  loading={false}
  fullWidth={false}
>
  Click Me
</Button>
```

**Props:**
- `children`: React.ReactNode - Button content
- `onClick?`: () => void - Click handler
- `type?`: 'button' | 'submit' | 'reset' - Button type
- `variant?`: 'primary' | 'secondary' | 'outline' | 'ghost' - Button style
- `size?`: 'sm' | 'md' | 'lg' - Button size
- `disabled?`: boolean - Whether button is disabled
- `loading?`: boolean - Show loading state
- `className?`: string - Additional CSS classes
- `fullWidth?`: boolean - Whether button takes full width

### IconButton
A button component specifically designed for icons.

```tsx
import { IconButton } from '@/components/common/ui';

<IconButton
  icon={<SomeIcon />}
  onClick={() => console.log('Icon clicked')}
  variant="primary"
  size="md"
  tooltip="Click me"
  ariaLabel="Action button"
/>
```

**Props:**
- `icon`: React.ReactNode - Icon element
- `onClick?`: () => void - Click handler
- `variant?`: 'primary' | 'secondary' | 'outline' | 'ghost' - Button style
- `size?`: 'sm' | 'md' | 'lg' - Button size
- `disabled?`: boolean - Whether button is disabled
- `className?`: string - Additional CSS classes
- `tooltip?`: string - Tooltip text
- `ariaLabel?`: string - Accessibility label

### FilterSection
A wrapper component for organizing filter elements.

```tsx
import { FilterSection } from '@/components/common/ui';

<FilterSection
  title="Filters"
  description="Configure your search filters"
  className="custom-class"
>
  {/* Filter components go here */}
</FilterSection>
```

**Props:**
- `children`: React.ReactNode - Filter components
- `className?`: string - Additional CSS classes
- `title?`: string - Section title
- `description?`: string - Section description

## Usage Examples

### Complete Filter Form
```tsx
import { 
  FilterSection, 
  DateInput, 
  Dropdown, 
  SearchInput, 
  Button 
} from '@/components/common/ui';

const MyFilterForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ];

  return (
    <FilterSection title="Search Filters">
      <div className="flex gap-4">
        <DateInput
          value={startDate}
          onChange={setStartDate}
          label="Start Date"
        />
        <DateInput
          value={endDate}
          onChange={setEndDate}
          label="End Date"
        />
        <Dropdown
          options={options}
          value={selectedOption}
          onChange={setSelectedOption}
          label="Category"
        />
      </div>
      
      <SearchInput
        value={searchQuery}
        onChange={setSearchQuery}
        label="Search"
        placeholder="Enter search term..."
      />
      
      <Button onClick={() => console.log('Search')}>
        Search
      </Button>
    </FilterSection>
  );
};
```

## Styling

All components follow the application's design system:
- Use Inter font family
- Consistent color scheme with gradient accents
- Responsive design with mobile-first approach
- Accessibility features (ARIA labels, focus states)
- Hover and focus states for interactive elements

## TypeScript Support

All components are fully typed with TypeScript interfaces exported from `types.ts`. Import types as needed:

```tsx
import { ButtonProps, DropdownProps } from '@/components/common/ui';
```

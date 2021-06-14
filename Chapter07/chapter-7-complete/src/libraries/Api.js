export const parse = schema => {
  const fields = schema['fields'];
  const parsedSchema = {};

  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];

    parsedSchema[field.id] = {
      component: componentForField(field.type),
      label: field.label,
      options: field.opts || null
    }
  }

  return parsedSchema;
}

function componentForField(field) {
  switch(field) {
    case 'singleChoice': return 'BaseSelect';
    
    default: return 'BaseInput';
  }
}

/*
{
    "fieldCount": 4,
    "fields": [
        {
            "type": "input",
            "id": "firstName",
            "label": "First Name"
        },
        {
            "type": "input",
            "id": "lastName",
            "label": "Last Name"
        },
        {
            "type": "input",
            "id": "email",
            "label": "Email"
        },
        {
            "type": "singleChoice",
            "label": "What's your favorite animal?",
            "opts": [
                { "label": "Cat", "value": "cat" },
                { "label": "Dog", "value": "dog" },
                { "label": "Sea Otter", "value": "onlyvalidanswer" }
            ]
        }
    ]
}
*/

var _ = require('underscore');
var helper = require('../helper');

module.exports = dataStructure => {
  if (dataStructure.type !== 'object')
    return '';

 var md = `
Name | Type | Description
-----|------|------------
`;

  dataStructure.fields.forEach(field => { md += _renderField(field); });

  return md;
};

function _renderField(field, options) {
  if (field.element === 'ref') {
    ref = helper.dataStructures[field.content.href];

    if (!ref)
      return '';

    return ref.fields.map(field => _renderField(field)).join('');
  }

  var field = _formatField(field);

  var formattedName = field.name;
  if (options && options.prefix)
    formattedName = `${options.prefix}.${formattedName}`;

  var formattedType = field.type;
  if (!field.required)
    formattedType += ' (optional)'

  var renderedField = `${formattedName} | ${formattedType} | ${field.description} ${(_getSamplesDescription(field) + ' ' + _getDefaultValueDescription(field)).trim()}
`;

  if (field.type === 'object' && field.example)
    renderedField += field.example.map(subObj => _renderField(subObj, { prefix: formattedName })).join('');

  return renderedField;
}

function _formatField(field) {
  var isRequired = field.attributes ? _(field.attributes.typeAttributes).contains('required') : false;

  var formattedField = {
    name       : field.content.key.content,
    description: field.meta ? field.meta.description : '',
    required   : isRequired,
    type       : field.content.value.element,
    default    : field.content.value.attributes ? field.content.value.attributes.default : null,
    samples    : field.content.value.attributes ? field.content.value.attributes.samples : null,
    example    : field.content.value.content
  };

  return formattedField;
}

function _getDefaultValueDescription(field) {
  if (field.default === undefined || field.default === null)
    return '';

  var defaultValue = field.default;

  if (_.isArray(defaultValue))
    defaultValue = field.default.map(formatAttribute).join(', ');

  return `(Default: \`${defaultValue}\`)`;
}

function _getSamplesDescription(field) {
  if (!field.samples)
    return '';

  const sampleValues = field.samples[0].map(sample => {
    return `\`${formatAttribute(sample)}\``;
  }).join(', ');

  return `Can be one of: ${sampleValues}.`;
}

function formatAttribute(attr) {
  return attr.element === 'string' ? `'${attr.content}'` : attr.content;
}

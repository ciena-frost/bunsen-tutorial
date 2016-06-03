import Ember from 'ember';
import {AbstractInput} from 'ember-frost-bunsen';

export default AbstractInput.extend({
  classNames: ['frost-field'],

  renderValue: Ember.computed('transformedValue', function () {
    const name = this.get('transformedValue');

    if (!name) {
      return '';
    }

    const first = name.first || '';
    const last = name.last || '';
    const space = this.get('trailingSpace') || name.last ? ' ' : '';

    return `${first}${space}${last}`;
  }).readOnly(),

  parseValue (target) {
    const parts = target.value.split(' ');
    const trailingSpace = / $/.test(target.value);

    this.set('trailingSpace', trailingSpace);

    return {
      first: parts[0],
      last: (parts.length > 1) ? parts.slice(1).join(' ') : undefined
    };
  }
});

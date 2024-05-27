import { FieldProcessor, FieldSchema, StructureSchema, ValueType } from '@ephox/boulder';
import { Optional, Result } from '@ephox/katamari';

import * as ComponentSchema from '../../core/ComponentSchema';
import { FormComponentWithLabel, formComponentWithLabelFields, FormComponentWithLabelSpec } from './FormComponent';

export interface SelectBoxItemSpec {
  text: string;
  value: string;
}

export interface SelectBoxSpec extends FormComponentWithLabelSpec {
  type: 'selectbox';
  items: SelectBoxItemSpec[];
  size?: number;
  enabled?: boolean;
  id?: string;
}

export interface SelectBoxItem {
  text: string;
  value: string;
}

export interface SelectBox extends FormComponentWithLabel {
  type: 'selectbox';
  items: SelectBoxItem[];
  size: number;
  enabled: boolean;
  id: Optional<string>;
}

const selectBoxFields: FieldProcessor[] = formComponentWithLabelFields.concat([
  FieldSchema.requiredArrayOfObj('items', [
    ComponentSchema.text,
    ComponentSchema.value
  ]),
  FieldSchema.defaultedNumber('size', 1),
  FieldSchema.optionString('id'),
  ComponentSchema.enabled
]);

export const selectBoxSchema = StructureSchema.objOf(selectBoxFields);

export const selectBoxDataProcessor = ValueType.string;

export const createSelectBox = (spec: SelectBoxSpec): Result<SelectBox, StructureSchema.SchemaError<any>> =>
  StructureSchema.asRaw<SelectBox>('selectbox', selectBoxSchema, spec);

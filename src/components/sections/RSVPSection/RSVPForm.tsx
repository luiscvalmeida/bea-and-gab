import { useState, useEffect, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FormGroup,
  Label,
  Input,
  Textarea,
  RadioGroup,
  RadioLabel,
  FormDescription,
  ConditionalField,
  FormMessage,
  SubmitButton,
} from './FormFields';
import styled from 'styled-components';

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzLr1TSqLQRAQNUf3pP-NvyUnwzlMqlQXmFGqx0ZwnHw5DNQwnKOwPy77VDydufPWVg/exec';
const RSVP_STORAGE_KEY = 'rsvp_submitted';

interface RSVPFormData {
  name: string;
  plusOne: string;
  bringingKids: 'yes' | 'no' | '';
  kidsDetails: string;
  foodRestrictions: 'yes' | 'no' | '';
  foodDetails: string;
  needTransport: 'yes' | 'no' | 'maybe' | '';
  transportDetails: string;
}

const initialFormData: RSVPFormData = {
  name: '',
  plusOne: '',
  bringingKids: '',
  kidsDetails: '',
  foodRestrictions: '',
  foodDetails: '',
  needTransport: '',
  transportDetails: '',
};

const Form = styled.form`
  max-width: 500px;
  margin: 30px auto 0;
  text-align: left;
`;

interface RadioOptionProps<T extends string> {
  name: keyof RSVPFormData;
  value: T;
  currentValue: string;
  labelKey: string;
  onChange: (value: T) => void;
  required?: boolean;
}

function RadioOption<T extends string>({
  name,
  value,
  currentValue,
  labelKey,
  onChange,
  required,
}: RadioOptionProps<T>) {
  const { t } = useTranslation();
  const isChecked = currentValue === value;

  return (
    <RadioLabel $checked={isChecked}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={() => onChange(value)}
        required={required}
      />
      <span>{t(labelKey)}</span>
    </RadioLabel>
  );
}

export function RSVPForm() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState<RSVPFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(RSVP_STORAGE_KEY)) {
      setIsSubmitted(true);
    }
  }, []);

  const updateField = <K extends keyof RSVPFormData>(
    field: K,
    value: RSVPFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    const payload = {
      ...formData,
      language: i18n.language,
      submittedAt: new Date().toISOString(),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      localStorage.setItem(
        RSVP_STORAGE_KEY,
        JSON.stringify({
          name: formData.name,
          submittedAt: payload.submittedAt,
        })
      );

      setIsSubmitted(true);
    } catch {
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return <FormMessage $type="success">{t('rsvp.success')}</FormMessage>;
  }

  const showKidsDetails = formData.bringingKids === 'yes';
  const showFoodDetails = formData.foodRestrictions === 'yes';
  const showTransportDetails = formData.needTransport === 'yes';

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="rsvp-name">{t('rsvp.nameLabel')}</Label>
          <Input
            type="text"
            id="rsvp-name"
            value={formData.name}
            onChange={(e) => updateField('name', e.target.value)}
            placeholder={t('rsvp.namePlaceholder')}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="rsvp-plusone">{t('rsvp.plusoneLabel')}</Label>
          <Input
            type="text"
            id="rsvp-plusone"
            value={formData.plusOne}
            onChange={(e) => updateField('plusOne', e.target.value)}
            placeholder={t('rsvp.plusonePlaceholder')}
          />
        </FormGroup>

        <FormGroup>
          <Label>{t('rsvp.kidsLabel')}</Label>
          <RadioGroup>
            <RadioOption
              name="bringingKids"
              value="yes"
              currentValue={formData.bringingKids}
              labelKey="rsvp.kidsYes"
              onChange={(v) => updateField('bringingKids', v)}
              required
            />
            <RadioOption
              name="bringingKids"
              value="no"
              currentValue={formData.bringingKids}
              labelKey="rsvp.kidsNo"
              onChange={(v) => updateField('bringingKids', v)}
            />
          </RadioGroup>
        </FormGroup>

        <ConditionalField $visible={showKidsDetails}>
          <FormGroup>
            <Label htmlFor="rsvp-kids-details">
              {t('rsvp.kidsDetailsLabel')}
            </Label>
            <Input
              type="text"
              id="rsvp-kids-details"
              value={formData.kidsDetails}
              onChange={(e) => updateField('kidsDetails', e.target.value)}
              placeholder={t('rsvp.kidsDetailsPlaceholder')}
            />
          </FormGroup>
        </ConditionalField>

        <FormGroup>
          <Label>{t('rsvp.foodLabel')}</Label>
          <RadioGroup>
            <RadioOption
              name="foodRestrictions"
              value="yes"
              currentValue={formData.foodRestrictions}
              labelKey="rsvp.foodYes"
              onChange={(v) => updateField('foodRestrictions', v)}
              required
            />
            <RadioOption
              name="foodRestrictions"
              value="no"
              currentValue={formData.foodRestrictions}
              labelKey="rsvp.foodNo"
              onChange={(v) => updateField('foodRestrictions', v)}
            />
          </RadioGroup>
        </FormGroup>

        <ConditionalField $visible={showFoodDetails}>
          <FormGroup>
            <Label htmlFor="rsvp-food-details">
              {t('rsvp.foodDetailsLabel')}
            </Label>
            <Input
              type="text"
              id="rsvp-food-details"
              value={formData.foodDetails}
              onChange={(e) => updateField('foodDetails', e.target.value)}
              placeholder={t('rsvp.foodDetailsPlaceholder')}
            />
          </FormGroup>
        </ConditionalField>

        <FormGroup>
          <Label>{t('rsvp.transportLabel')}</Label>
          <FormDescription>{t('rsvp.transportDescription')}</FormDescription>
          <RadioGroup>
            <RadioOption
              name="needTransport"
              value="yes"
              currentValue={formData.needTransport}
              labelKey="rsvp.transportYes"
              onChange={(v) => updateField('needTransport', v)}
              required
            />
            <RadioOption
              name="needTransport"
              value="no"
              currentValue={formData.needTransport}
              labelKey="rsvp.transportNo"
              onChange={(v) => updateField('needTransport', v)}
            />
            <RadioOption
              name="needTransport"
              value="maybe"
              currentValue={formData.needTransport}
              labelKey="rsvp.transportMaybe"
              onChange={(v) => updateField('needTransport', v)}
            />
          </RadioGroup>
        </FormGroup>

        <ConditionalField $visible={showTransportDetails}>
          <FormGroup>
            <Label htmlFor="rsvp-transport-details">
              {t('rsvp.transportDetailsLabel')}
            </Label>
            <Textarea
              id="rsvp-transport-details"
              value={formData.transportDetails}
              onChange={(e) => updateField('transportDetails', e.target.value)}
              placeholder={t('rsvp.transportDetailsPlaceholder')}
              rows={3}
            />
          </FormGroup>
        </ConditionalField>

        <FormGroup>
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? t('rsvp.submitting') : t('rsvp.submit')}
          </SubmitButton>
        </FormGroup>
      </Form>

      {hasError && <FormMessage $type="error">{t('rsvp.error')}</FormMessage>}
    </>
  );
}

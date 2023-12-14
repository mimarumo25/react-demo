import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const PersonalInfoComponent = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {t('personalInfo.title')}
        </Typography>
        <Typography variant="body1">
          {t('personalInfo.name')}: {data.name}
        </Typography>
        <Typography variant="body1">
          {t('personalInfo.age')}: {data.age}
        </Typography>
        <Typography variant="body1">
          {t('personalInfo.email')}: {data.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoComponent;

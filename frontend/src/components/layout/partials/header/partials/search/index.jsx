import { Autocomplete, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { styles } from './styles';
import { useIntl } from 'react-intl';
import { usePermissions } from '~/hooks/utils/usePermissions';
import { extractSearchList } from './search.helpers';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const intl = useIntl();
  const { useHaveOneOfPermissions } = usePermissions();
  const navigate = useNavigate();

  return (
    <Autocomplete
      size="small"
      freeSolo
      id="combo-box-demo"
      options={extractSearchList(intl, useHaveOneOfPermissions)}
      sx={styles.root}
      onChange={(e, data) => navigate(data?.path)}
      renderInput={params => (
        <TextField
          variant="outlined"
          {...params}
          InputProps={{
            ...params.InputProps,
            startAdornment: <SearchIcon />,
          }}
          placeholder={intl.formatMessage({ id: 'search' })}
        />
      )}
    />
  );
};

export default Search;

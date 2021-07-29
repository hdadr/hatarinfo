import { Box, Link, Paper } from "@material-ui/core";
import styles from "./border-description.module.scss";

const BorderDescription = ({ border }) => {
  return (
    <Paper elevation={1}>
      <div className={styles.borderDescription}>
        <div>
          <Box color="text.secondary">Határ:</Box>
          {border?.name}
        </div>
        <div>
          <Box color="text.secondary">Nyitvatartás:</Box>
          {border?.openingHours}h
        </div>
        <div>
          <Box color="text.secondary">Hivatalos infó:</Box>
          <Link
            href={
              border?.link
                ? info.link
                : "http://www.police.hu/hu/hirek-es-informaciok/hatarinfo?field_hat_rszakasz_value=szerb+hat%C3%A1rszakasz"
            }>
            Weboldal
          </Link>
        </div>
      </div>
    </Paper>
  );
};

export default BorderDescription;

import { Report } from 'notiflix/build/notiflix-report-aio';

function errorInfo(error) {
  console.log(error);
  Report.failure(`${error.code}`, `${error.message}`, 'OK', {
    width: '400px',
    messageFontSize: '16px',
    titleFontSize: '32px',
    svgSize: '65px',
    backOverlayClickToClose: true,
  });
}

function warningInfo(name) {
  Report.warning(
    'WARNING',
    `Сannot add user, because "${name}" is already in contacts`,
    'OK',
    {
      width: '400px',
      messageFontSize: '16px',
      titleFontSize: '32px',
      svgSize: '65px',
      backOverlayClickToClose: true,
    }
  );
}

export { errorInfo, warningInfo };

import winston from 'winston';

const logConfiguration = {
  transports: [
    new winston.transports.File({
      filename: "./logs/logs.log",
    }),
  ],
  format: winston.format.combine(
    winston.format.label({
      label: `Label`,
    }),
    winston.format.timestamp({
      format: `MMM-DD-YYYY HH:mm:ss`,
    }),
    winston.format.printf(
      (info) =>
        `${info.level}: ${info.label}: ${info.timestamp}: ${info.message}`
    )
  ),
};

export const logger = winston.createLogger(logConfiguration);


export default function formatCreatedAt(createdTime) {
  const dt = new Date();
  const currentTime = dt.getTime();

  const unix_timestamp = (currentTime - createdTime) / 1000;
  var days = Math.floor(unix_timestamp / (3600 * 24));
  var hours = Math.floor((unix_timestamp % (3600 * 24)) / 3600);
  var minutes = Math.floor((unix_timestamp % 3600) / 60);
  var seconds = Math.floor(unix_timestamp % 60);

  let result = '';
  if (days > 360) {
    result = `${Math.floor(days / 360)}y`;
  } else if (days > 30) {
    result = `${Math.floor(days / 30)}m`;
  } else if (days > 0) {
    result = `${days}d`;
  } else if (hours > 0) {
    result = `${hours}h`;
  } else if (minutes > 0) {
    result = `${minutes}m`;
  } else {
    result = `${seconds}s`;
  }

  return result;
}

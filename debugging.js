const PI = 3.14;
let area = 0;
function circleArea(radius){
    const area = radius * radius * PI;
    return area;
}
area = circleArea(3);
console.log("Area1:", area);
area = circleArea(4);
console.log("Area2:", area);

const points = [100,88,94,78,84,69];

function convertPointsToStatus(pointTotal) {
  let status = 'Not Complete';
  if (pointTotal >= 93) {
    status = 'Excellent';
  } else if (pointTotal >= 70) {
    status = 'Complete';
  }
  return status;
}

const statusReport = points.map(convertPointsToStatus);
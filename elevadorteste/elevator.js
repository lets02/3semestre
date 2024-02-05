$(document).ready(function () {
    const floors = ['S2', 'S1', 'T', '1', '2', '3', '4', '5', '6'];
  
    $('.callButton').on('click', function () {
      const destination = $(this).data('floor');
      const elevator = getClosestElevator(destination);
      moveElevator(elevator, destination);
    });
  
    function getClosestElevator(destination) {
      const elevators = $('.elevator');
      let closestElevator;
      let minDistance = Infinity;
  
      elevators.each(function () {
        const currentFloor = $(this).data('currentFloor');
        const distance = Math.abs(floors.indexOf(currentFloor) - floors.indexOf(destination));
  
        if (distance < minDistance) {
          minDistance = distance;
          closestElevator = $(this);
        }
      });
  
      return closestElevator;
    }
  
    function moveElevator(elevator, destination) {
      const currentFloor = elevator.data('currentFloor');
      const distance = Math.abs(floors.indexOf(currentFloor) - floors.indexOf(destination));
  
      elevator.animate({ top: distance * 80 + 'px' }, 1000, function () {
        $(this).data('currentFloor', destination);
        showLightIndicator($(this));
      });
    }
  
    function showLightIndicator(elevator) {
      elevator.css('background-color', '#e74c3c');
      setTimeout(function () {
        elevator.css('background-color', '#3498db');
      }, 2000);
    }
  });
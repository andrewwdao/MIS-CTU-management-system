import React from 'react';

import ListRow from './ListRow';

class ListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Track the current selected equipment in Detail pannel
      // when we make any changes, check if the changed equipment has this ID
      // if yes, we call updateSelectedEquipment to update info in the Detail pannel
      selectedEquipmentId: '',
      equipments: [
        {
          id: '1234567',
          name: 'This is Equipment',
          description: "Description goes here, very long long long long long long long long long long long long long",
          equipmentSelfs: [
            {
              id: '1',
              condition: 2,
              conditionDescription: 'Good',
              status: 0
            },
            {
              id: '2',
              condition: 1,
              conditionDescription: 'Normal',
              status: 1
            },
            {
              id: '3',
              condition: 0,
              conditionDescription: "Can not be used",
              status: 0
            },
            {
              id: '4',
              condition: -1,
              conditionDescription: "Severe",
              status: 0
            }
          ],
        },
        {
          id: '4342563',
          name: 'Equipment field',
          equipmentSelfs: [
            {
              id: '1',
              condition: -1,
              conditionDescription: 'Severe',
              status: 0
            },
            {
              id: '2',
              condition: 0,
              conditionDescription: "Can not be used, for real, this is not a reason just a test text",
              status: 0
            }
          ],
        },
        {
          id: '2345789',
          name: 'This is Equipment 2',
          equipmentSelfs: [
            {
              id: '1',
              condition: 1,
              conditionDescription: 'Good',
              status: 1
            },
            {
              id: '2',
              condition: 0,
              conditionDescription: "Can not be used",
              status: 0
            }
          ],
        }
      ]
    };
  }

  // Track the selected equipment ID and update the info on Detail pannel
  updateSelectedEquipment(equipment) {
    // Track the current selected equipment ID
    this.setState({
      selectedEquipmentId: equipment.id
    });

    // Update the info on the Detail pannel
    this.props.updateSelectedEquipment(equipment);
  }

  render() {
    const equipments = this.state.equipments.map(
      equipment => {

        // Need try block to avoid exception when equipment try to enter some regex (*, ?)
        try {
          // If the filter string is found
          const searchFilter = this.props.searchFilter.toLowerCase();
          if (equipment.id.toLowerCase().search(searchFilter) !== -1 ||
              equipment.name.toLowerCase().search(searchFilter) !== -1)
            return (
              <ListRow
                key={equipment.id}
                equipment={equipment}
                inlabFilter={this.props.inlabFilter}
                selectedEquipmentId={this.props.selectedEquipmentId}
                updateSelectedEquipment={this.props.updateSelectedEquipment}
                />
            );
        } catch (e) {
          console.log(e);
        }

        return null;
      }
    );

    return(
      <div className="list-view">
        <div className="list-view-main-row">
          <div className="EquipmentList list-view-header id">ID</div>
          <div className="EquipmentList list-view-header equipment">Equipment</div>
          <div className="EquipmentList list-view-header count">
            {this.props.inlabFilter ? 'In use' : 'Total'}
          </div>
        </div>

        {equipments}
      </div>
    );
  }
}

export default ListView;
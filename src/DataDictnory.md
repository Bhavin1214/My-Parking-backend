# Data Dictionary - My Parking Project

## 1. Parking Lot Table (parking_lot)

| Column Name | Data Type | Description | Constraints |
|------------|----------|-------------|-------------|
| lot_id | INT (PK) | Unique identifier for each parking lot | Primary Key, Auto-increment |
| name | VARCHAR(100) | Name of the parking lot | Not Null |
| location | TEXT | Address or GPS coordinates of the lot | Not Null |
| capacity | INT | Total number of available spaces | Not Null, Must be > 0 |
| status | ENUM('Open', 'Full', 'Closed') | Status of the parking lot | Default: 'Open' |

---

## 2. Parking Spot Table (parking_spot)

| Column Name | Data Type | Description | Constraints |
|------------|----------|-------------|-------------|
| spot_id | INT (PK) | Unique identifier for each parking spot | Primary Key, Auto-increment |
| lot_id | INT (FK) | Foreign key referencing parking_lot.lot_id | Not Null, Foreign Key |
| spot_number | VARCHAR(10) | Spot number or label | Unique within lot_id, Not Null |
| type | ENUM('Regular', 'EV', 'Handicapped') | Type of parking spot | Default: 'Regular' |
| status | ENUM('Available', 'Occupied', 'Reserved') | Current status of the spot | Default: 'Available' |

---

## 3. Vehicle Table (vehicle)

| Column Name | Data Type | Description | Constraints |
|------------|----------|-------------|-------------|
| vehicle_id | INT (PK) | Unique identifier for each vehicle | Primary Key, Auto-increment |
| license_plate | VARCHAR(15) | Vehicle's license plate number | Unique, Not Null |
| owner_name | VARCHAR(100) | Name of the vehicle owner | Not Null |
| type | ENUM('Car', 'Bike', 'Truck', 'EV') | Type of vehicle | Not Null |
| registered_at | TIMESTAMP DEFAULT CURRENT_TIMESTAMP | Time when the vehicle was registered | Not Null |

---

## 4. Parking Transactions Table (parking_transaction)

| Column Name | Data Type | Description | Constraints |
|------------|----------|-------------|-------------|
| transaction_id | INT (PK) | Unique transaction ID | Primary Key, Auto-increment |
| spot_id | INT (FK) | Foreign key referencing parking_spot.spot_id | Not Null, Foreign Key |
| vehicle_id | INT (FK) | Foreign key referencing vehicle.vehicle_id | Not Null, Foreign Key |
| entry_time | DATETIME | Time when the vehicle entered | Not Null |
| exit_time | DATETIME NULL | Time when the vehicle left | Nullable |
| amount_paid | DECIMAL(10,2) DEFAULT 0.00 | Parking fee paid | Not Null |

---

## 5. User Table (user)

| Column Name | Data Type | Description | Constraints |
|------------|----------|-------------|-------------|
| user_id | INT (PK) | Unique identifier for each user | Primary Key, Auto-increment |
| username | VARCHAR(50) | Unique username | Unique, Not Null |
| password | VARCHAR(255) | Hashed password | Not Null |
| role | ENUM('Admin', 'Staff', 'Customer') | User role | Default: 'Customer' |
| created_at | TIMESTAMP DEFAULT CURRENT_TIMESTAMP | Account creation timestamp | Not Null |

---

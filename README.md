# FRCScouter7563-Frontend

# FRCScouter7563 Frontend Architecture

```
FRCScouter7563/
│
├── Home (/)
│
├── Events (/events)
│
├── Teams (/teams)
│
├── Matches (/matches)
│
└── Scout (/scout)
```

---

# Home

**Route**

```
/
```

## Purpose

Display all events grouped by competition week.

## Contents

```
Week 0
Week 1
Week 2
Week 3
Week 4
Week 5
Week 6
Week 7
Championship
...
```

Each event card redirects to:

```
/events/{event_key}
```

---

# Events

## Route

```
/events
```

Lists every event grouped by week.

---

## Event Details

```
/events/{event_key}
```

### Results

```
Results
├── Qualification Matches
├── Alliance Selection
└── Playoffs
```

### Teams

```
Teams
└── Teams Table
```

### Rankings

```
Rankings
└── Qualification Rankings
```

### Insights

```
Insights
└── Scout Rankings (Custom Metrics)
```

### Matches

```
Matches
└── Match List
```

---

# Teams

## Route

```
/teams
```

Displays all teams.

Pagination:

```
/teams/page/1
/teams/page/2
...
```

---

## Team Insights

```
/teams/insights
```

Pagination:

```
/teams/insights/page/1
/teams/insights/page/2
...
```

---

## Team Details

```
/teams/{team_number}
```

### Overview

General information.

### Events

Every event attended.

### Scout Insights

Aggregated scouting statistics.

### Statistics

Performance metrics.

---

# Matches

## Match Details

```
/matches/{match_key}
```

### Sections

```
Overview

Auto

Teleop

Endgame

Teams
```

Each team redirects to:

```
/matches/{match_key}/{team_number}
```

---

## Team Scout View

```
/matches/{match_key}/{team_number}
```

### Contents

```
Scout Data

Timeline

Statistics

Notes
```

---

# Scout

## New Scout

```
/scout
```

Allows the user to start a new scouting session.

---

## Match Selection

```
/scout/{match_key}
```

Choose one of the six teams.

---

## Scout Form

```
/scout/{match_key}/{team_number}
```

### Sections

```
Auto

Teleop

Endgame

Penalties

Notes

Submit
```

---

# Navigation Flow

```
Home
│
├── Events
│   └── Event
│       ├── Results
│       ├── Teams
│       ├── Rankings
│       ├── Insights
│       └── Matches
│           └── Match
│               └── Team Scout
│
├── Teams
│   └── Team
│
├── Matches
│   └── Match
│
└── Scout
    └── Match
        └── Team
```

---

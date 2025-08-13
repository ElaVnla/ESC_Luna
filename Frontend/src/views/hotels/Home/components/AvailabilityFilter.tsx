// AvailabilityFilter.tsx
import Flatpicker from "@/components/Flatpicker";
import { SelectFormInput } from "@/components/form";
import { useState, useEffect, useMemo } from "react";
import {
  Button, Card, Col, Dropdown, DropdownDivider, DropdownMenu,
  DropdownToggle, FormLabel, Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsCalendar, BsDashCircle, BsGeoAlt, BsPerson, BsPlusCircle, BsSearch } from "react-icons/bs";
import { parsedestinations } from "../fetchdestinations";
import { destinationinterface } from "../destinationinterface";

type AvailabilityFormType = {
  location: string; // uid
  stayFor: Date | Array<Date>;
  guests: { totalguests: number; rooms: number };
  // we'll tack on a label for display when options aren't loaded
  locationLabel?: string;
};

const SESSION_KEY = "availability:filters";
const DESTS_KEY = "availability:destinations";

export default function AvailabilityFilter({ loadDestinations = true }: { loadDestinations?: boolean }) {
  const initialValue: AvailabilityFormType = {
    location: "00Hr",
    stayFor: [
      new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
    ],
    guests: { totalguests: 1, rooms: 1 },
  };

  const serialize = (v: AvailabilityFormType) =>
    JSON.stringify({
      ...v,
      stayFor: Array.isArray(v.stayFor)
        ? (v.stayFor as Date[]).map((d) => d.toISOString())
        : (v.stayFor as Date).toISOString(),
    });

  const deserialize = (s: string): AvailabilityFormType | null => {
    try {
      const raw = JSON.parse(s);
      const stayFor = Array.isArray(raw.stayFor)
        ? raw.stayFor.map((d: string) => new Date(d))
        : new Date(raw.stayFor);
      return {
        location: raw.location ?? initialValue.location,
        stayFor,
        guests: {
          totalguests: Number(raw.guests?.totalguests) || 1,
          rooms: Number(raw.guests?.rooms) || 1,
        },
        locationLabel: raw.locationLabel, // may be undefined first time
      };
    } catch {
      return null;
    }
  };

  const [formValue, setFormValue] = useState<AvailabilityFormType>(initialValue);
  const [locations, setLocations] = useState<destinationinterface[]>([]);

  // load filters on mount
  useEffect(() => {
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved) {
      const parsed = deserialize(saved);
      if (parsed) setFormValue(parsed);
    }
  }, []);

  // load destinations: fetch on Home; else read from cache on List
  useEffect(() => {
    if (loadDestinations) {
      parsedestinations().then((list) => {
        setLocations(list);
        sessionStorage.setItem(DESTS_KEY, JSON.stringify(list));
        // also refresh the label if we can
        const selected = list.find((d) => d.uid === formValue.location);
        if (selected) {
          setFormValue((prev) => ({
            ...prev,
            locationLabel: `${selected.term}${selected.state ? `, ${selected.state}` : ""}`,
          }));
        }
      });
    } else {
      const cached = sessionStorage.getItem(DESTS_KEY);
      if (cached) {
        try {
          const list = JSON.parse(cached) as destinationinterface[];
          setLocations(list);
        } catch {
          // ignore malformed cache
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadDestinations]);

  // keep cache in sync on every change
  useEffect(() => {
    sessionStorage.setItem(SESSION_KEY, serialize(formValue));
  }, [formValue]);

  // helper: compute label when options are present
  const selectedLabelFromList = useMemo(() => {
    const sel = locations.find((d) => d.uid === formValue.location);
    return sel ? `${sel.term}${sel.state ? `, ${sel.state}` : ""}` : undefined;
  }, [locations, formValue.location]);

  // when user changes location, also update label for fallback rendering
  const handleLocationChange = (uid: string) => {
    const sel = locations.find((d) => d.uid === uid);
    setFormValue((prev) => ({
      ...prev,
      location: uid,
      locationLabel: sel ? `${sel.term}${sel.state ? `, ${sel.state}` : ""}` : prev.locationLabel,
    }));
  };

  const updateGuests = (type: keyof AvailabilityFormType["guests"], increase = true) => {
    const val = formValue.guests[type];
    setFormValue((prev) => ({
      ...prev,
      guests: { ...prev.guests, [type]: increase ? val + 1 : Math.max(1, val - 1) },
    }));
  };

  const getGuestsValue = (): string => {
    const { totalguests: total, rooms } = formValue.guests;
    return Array.from({ length: rooms || 1 }, () => total).join("|");
  };

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem(SESSION_KEY, serialize(formValue));

    const selected = locations.find((loc) => loc.uid === formValue.location);
    const city = selected?.term ?? formValue.locationLabel ?? "";
    const state = selected?.state ?? "";

    const [start, end] = formValue.stayFor as [Date, Date];
    const query =
      `city=${encodeURIComponent(city)}` +
      `&state=${encodeURIComponent(state)}` +
      `&guests=${encodeURIComponent(getGuestsValue())}` +
      `&checkin=${encodeURIComponent(start.toISOString())}` +
      `&checkout=${encodeURIComponent(end.toISOString())}`;

    navigate(`/hotels/list?${query}`);
  };

  // Build <option>s: use full list if available; otherwise a single fallback option
  const optionNodes =
    locations.length > 0
      ? locations.map((loc) => (
          <option key={loc.uid} value={loc.uid}>
            {loc.term}{loc.state ? `, ${loc.state}` : ""}
          </option>
        ))
      : [
          <option key={formValue.location} value={formValue.location}>
            {selectedLabelFromList || formValue.locationLabel || "Selected destination"}
          </option>,
        ];

  return (
    <Row>
      <Col xl={10} className="position-relative mt-n3 mt-xl-n9">
        <h6 style={{ color: "white" }} className="d-none d-xl-block mb-3">Check Availability</h6>

        <Card as="form" onSubmit={handleSubmit} className="shadow rounded-3 position-relative p-4 pe-md-5 pb-5 pb-md-4">
          <Row className="g-4 align-items-center">
            <Col lg={4}>
              <div className="form-control-border form-control-transparent form-fs-md flex-centered gap-2">
                <BsGeoAlt size={37} />
                <div className="flex-grow-1">
                  <FormLabel className="form-label">Location</FormLabel>
                  <SelectFormInput
                    value={formValue.location}
                    onChange={handleLocationChange}
                  >
                    <option value={-1} disabled>Select location</option>
                    {optionNodes}
                  </SelectFormInput>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="flex-centered">
                <div><BsCalendar size={37} className="me-2" /></div>
                <div className="form-control-border form-control-transparent form-fs-md">
                  <FormLabel className="form-label">Check in - out</FormLabel>
                  <Flatpicker
                    value={formValue.stayFor}
                    getValue={(val) => setFormValue({ ...formValue, stayFor: val })}
                    options={{ mode: "range", dateFormat: "d M", closeOnSelect: false, minDate: "today" }}
                  />
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="form-control-border form-control-transparent form-fs-md flex-centered">
                <div><BsPerson size={37} className="me-2" /></div>
                <div className="w-100">
                  <label className="form-label">Guests &amp; rooms</label>
                  <Dropdown className="guest-selector me-2">
                    <DropdownToggle
                      as="input"
                      data-testid="guest-room-toggle"
                      className="form-guest-selector form-control selection-result"
                      value={getGuestsValue()}
                      onChange={() => {}}
                    />
                    <DropdownMenu className="guest-selector-dropdown" renderOnMount>
                      <li className="d-flex justify-content-between">
                        <div>
                          <h6 className="mb-0">Guests</h6>
                          <small>Per Room</small>
                        </div>
                        <div className="hstack gap-1 align-items-center">
                          <Button variant="link" className="adult-remove p-0 mb-0" onClick={() => updateGuests("totalguests", false)}>
                            <BsDashCircle className="fs-5 fa-fw" />
                          </Button>
                          <h6 className="guest-selector-count mb-0 adults">{formValue.guests.totalguests ?? 0}</h6>
                          <Button variant="link" className="adult-add p-0 mb-0" onClick={() => updateGuests("totalguests")}>
                            <BsPlusCircle className="fs-5 fa-fw" />
                          </Button>
                        </div>
                      </li>

                      <DropdownDivider />

                      <li className="d-flex justify-content-between">
                        <div>
                          <h6 className="mb-0">Rooms</h6>
                          <small>Per No. Of Guests</small>
                        </div>
                        <div className="hstack gap-1 align-items-center">
                          <Button variant="link" type="button" className="room-remove p-0 mb-0" onClick={() => updateGuests("rooms", false)}>
                            <BsDashCircle className="fs-5 fa-fw" />
                          </Button>
                          <h6 className="guest-selector-count mb-0 rooms">{formValue.guests.rooms ?? 0}</h6>
                          <Button variant="link" type="button" className="btn btn-link room-add p-0 mb-0" onClick={() => updateGuests("rooms")}>
                            <BsPlusCircle className="fs-5 fa-fw" />
                          </Button>
                        </div>
                      </li>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </Col>
          </Row>

          <div className="btn-position-md-middle">
            <button type="submit" className="icon-lg btn btn-round btn-primary mb-0 flex-centered">
              <BsSearch className="fa-fw" />
            </button>
          </div>
        </Card>
      </Col>
    </Row>
  );
}

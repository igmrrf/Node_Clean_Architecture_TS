1. Enable Stripe Integration
2. Generate a link_token and send to the frontend
3. Integrate with link token on frontend to get public_token and account Id

$ mongod --dbpath /tmp/data \
--auth \
--setParameter auditAuthorizationSuccess=true \
--auditDestination file \
--auditFormat JSON \
--auditPath /tmp/audit.json \
--auditFilter '{ atype: "authCheck", "param.ns": "gameofthrones.charactersNoSpoil", "param.command": { $in: [ "find", "insert", "delete", "update", "findandmodify" ] } }'
